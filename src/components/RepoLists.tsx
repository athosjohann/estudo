import {RepoItem} from './RepoItem'
import {useState, useEffect} from 'react'
import '../styles/repoStyles.scss'  

interface Repo {
    name: string;
    description: string;
    html_url: string;
}

export function RepoLists(){
    const [repo, setRepo] = useState <Repo []>([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data =>setRepo(data))
    }, [repo])

    return (
        <section className = "repo-lists">
            <h1>Lista de Repositorio</h1>

            <ul>
               {repo.map(descrip =>{
                   return <RepoItem key = {descrip.name} descrip = {descrip}/>
               })}
            </ul>
        </section>
    );
}