interface RepoItemProps {
    descrip :{
        name : string;
        description : string;
        html_url : string;
    }
}

export function RepoItem(props : RepoItemProps) {
    return (
        <li>
            <strong>{props.descrip.name}</strong>
            <p>{props.descrip.description}</p>
            

            <a href={props.descrip.html_url} target="_blank">Acessar repositorio</a>
        </li>
    );
}