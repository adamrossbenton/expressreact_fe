import {useState} from "react"

const Show = props => {
    const id = props.match.params.id
    const people = props.people
    const person = people.find(p => p._id === id)
    
    const [editForm, setEditForm] = useState(person)

    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.updatePeople(editForm, person._id)
        props.history.push("/")
    }

    const removePerson = () => {
        props.deletePeople(person._id)
        props.history.push("/")
    }

    return <div className="person">
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img src={person.image} alt={person.name} /><br />
        <button id="delete" onClick={removePerson}>DELETE</button>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.title}
                name="title"
                placeholder="Job Title"
                onChange={handleChange}
            />
            <input type="submit" value="UPDATE" />
        </form>
    </div>
}

export default Show