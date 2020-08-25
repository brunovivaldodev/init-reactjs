import React, {useState} from 'react';

import './App.css'

import Header from './Components/Header'
export default function App(){
    const [projects, setProjects] = useState(['Desenvolvimento Web', 'Mobile']);
    function handleAddProject(){
        setProjects([... projects , `Novo Projecto ${Date.now()}`])
    }
    return (
        <>
        <Header />
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar novos projectos</button>
        </>
    )
}