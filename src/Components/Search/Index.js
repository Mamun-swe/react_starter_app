import React, { useEffect, useState } from 'react'
import '../../Styles/Search/style.scss'
import Select from 'react-select'
import { Icon } from 'react-icons-kit'
import { ic_search } from 'react-icons-kit/md'
import { useForm } from 'react-hook-form'

const Index = ({ lat, lang }) => {
    const { register, handleSubmit, errors } = useForm()
    const [specialist, setSpecialist] = useState()

    const options = [
        { value: 'Medicine', label: 'Medicine' },
        { value: 'Phycologist', label: 'Phycologist' },
        { value: 'Cardiologist', label: 'Cardiologist' }
    ]

    useEffect(() => {
        setSpecialist(options[0].value)
    }, [])

    // onChange specialist select
    const onChangeSpecialist = event => {
        setSpecialist(event.value)
    }

    const onSubmit = async (data) => {
        const newData = {
            lattitude: lat,
            longitude: lang,
            deases: data.deases,
            specialist: specialist
        }
        console.log(newData)
    }


    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 shadow">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <input
                                            type="text"
                                            name="deases"
                                            className={errors.deases ? "form-control shadow-none form-control-error" : "form-control shadow-none"}
                                            placeholder="Deases name"
                                            ref={register({
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            classNamePrefix="custom-select"
                                            styles={customStyles}
                                            placeholder={'Select Specialist'}
                                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                                            options={options}
                                            onChange={onChangeSpecialist}
                                            defaultValue={options[0]}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn shadow-none"
                                        >
                                            <Icon icon={ic_search} size={28} />
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: 170,
        height: 45,
        fontSize: 14,
        color: '#000',
        boxShadow: 'none',
        '&:hover': { borderColor: 'none' },
        border: state.isFocused ? 'none' : 'none',
        borderRadius: '25px'
    })
}
