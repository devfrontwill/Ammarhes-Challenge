import './styles.css';

export default function ButtonGlobal({title}) {
    return (
        <div>
            <button type="submit" className="btn_generic">{title}</button>
        </div>
    )
}