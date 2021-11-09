import React, { useState, useContext, useEffect } from 'react';
import { useCallback, createContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  //async funkcija

  const fetchProjects = useCallback(() => {
    try {
      axios.get(`http://localhost:3500/work`).then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.res);
    }
  });

  //http get req koristeci axios
  const [links, setLinks] = useState([]);
  const fetchLinks = useCallback(() => {
    try {
      axios.get(`http://localhost:3500/nav`).then((response) => {
        setLinks(response.data);
      });
    } catch (error) {
      console.log(error.response);
    }
  });

  //http get req koristeci async, nisam mogao da pozovem services jer ne znam kako bih pozvao svg ikonicu
  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    try {
      const response = await fetch(`http://localhost:3500/services`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //post req za slanje mejlova
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const formDataHandel = useCallback((e) => {
    const newFormData = { ...formData };
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  });
  const submit = useCallback((e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3500/contacts`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        body: formData.body,
      })
      .then((res) => {
        setFormSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          body: '',
        });
      });
  });

  return (
    <AppContext.Provider
      value={{
        items,
        fetchProjects,
        links,
        fetchLinks,
        fetchServices,
        services,
        openModal,
        closeModal,
        isModalOpen,
        formData,
        formDataHandel,
        submit,
        formSent,
        setFormSent,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
