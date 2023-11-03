import { useRef } from "react"
import emailjs from '@emailjs/browser'
import { useState } from "react"

function Contact () {
    const blankForm = {
        name: '',
        email: '',
        subject: '',
        body: ''
    }
    const [ form, setForm ] = useState(blankForm)
    const changeHandler = ({target}) => {
        setForm({...form, [target.name]: target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault()
        emailjs
            .send(
                'service_vbej8w7',
                'template_e96lyrb',
                form,
                'DXrTGwcsF7SAz5S7A'
            )
            .then(() => {
                alert('Message sent successfully.')
                setForm(blankForm)
            })
            .catch((error) => {
                alert('Message failed to send. Try again later.')
                console.error(error)
                setForm(blankForm)
            })
    }

    return (
        <div id='Contact' className="my-5">
            <h3 className='text-4xl font-semibold mb-3 text-flame'>Contact Me:</h3>
            <p>For business inqueries, please fill out the form below. I will respond in 1 to 3 business days.</p>
            <div className="border rounded-md bg-charcoal-500 my-3 md:w-11/12 mx-auto">
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col px-3 my-2">
                        <label htmlFor="name" className="text-xl mb-1">
                            Name:
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            className="rounded-sm bg-charcoal-100"
                            value={form.name}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="flex flex-col px-3 mb-2">
                        <label htmlFor="email" className="text-xl mb-1">
                            Email:
                        </label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            className="rounded-sm bg-charcoal-100"
                            value={form.email}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="flex flex-col px-3 mb-2">
                        <label htmlFor="subject" className="text-xl mb-1">
                            Subject:
                        </label>
                        <input 
                            type="text"
                            name="subject"
                            id="subject"
                            className="rounded-sm bg-charcoal-100"
                            value={form.subject}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="flex flex-col px-3 mb-2">
                        <label htmlFor="body" className="text-xl mb-1">
                            Message:
                        </label>
                        <textarea
                            name="body"
                            id="body"
                            className="rounded-sm bg-charcoal-100 h-20"
                            value={form.body}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="flex flex-row mb-2 justify-around">
                        <button type="submit" className="border rounded-md px-2 py-1 bg-timberwolf text-charcoal-100 hover:text-timberwolf hover:bg-dark_moss_green-500 hover:rounded-sm">
                            Submit
                        </button>
                        <button type="button" className="border rounded-md px-2 py-1 bg-timberwolf text-charcoal-100 hover:text-timberwolf hover:bg-penn_red hover:rounded-sm">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact