interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={``}>
            {props.children}
        </div>
    )
}