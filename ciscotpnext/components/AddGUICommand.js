export default function AddGUICommand() {

    const createCommandFile = () => {
        axios.post("/api/create_gui_command", {
            body: 'test'
        })
    }

    return (
        <form onSubmit={}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
        </form>
    )
}