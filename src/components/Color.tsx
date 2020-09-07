import React, { useState } from 'react';

/**
 * for the type of parameter in Color
 * */
interface DataColor {
    id: number,//number of color in array
    name: String,//name of the color
    hex: String,//number of hexadecimal for the color
    saturation: String;//the level of brightness
}

/**
 * Method for color component
 */
const Color = ({ data }: { data: DataColor[] }) => {
    const [filter, setFilter] = useState<DataColor[] | null>();//initial state for the filter

    /**
     * Method for select data based color/saturation that is selected
     */
    const selectData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.currentTarget.name;//name is category or saturation
        const value = e.currentTarget.value;//the value of color/saturation that is selected
        if (value === '') {//check if color/saturation that is selected equal String ''
            setFilter([])//set state with no filter
        }
        else if (value !== '' && name === 'category') {//check if one color in category dropdown is selected
            const getTheFilter = data.filter(x => x.name === value);//show color that the name equal value (selected color)
            setFilter(getTheFilter);//set state with filter getTheFilter
        }
        else if (value !== '' && name === 'saturation') {//check if one color in saturation dropdown is selected
            const getTheFilter = data.filter(x => x.saturation === value);//show all color that the category equal value (selected color)
            setFilter(getTheFilter);//set state with filter getTheFilter
        }
    }

    return (
        <div className="container">
            <div className='filter'>
                {/* Dropdown number 1 */}
                <div className='formInput'>
                    <label>By Category</label>
                    <select name="category" onChange={selectData}>
                        <option value={''}></option>
                        {data.map(e => {//show all data color
                            return <option key={e.id} value={`${e.name}`}>{e.name}</option>
                        })}
                    </select>
                </div>
                {/* Dropdown number 2 */}
                <div className='formInput'>
                    <label>By Saturation</label>
                    <select name="saturation" onChange={selectData}>
                        <option value={''}></option>
                        <option value='lighter'>Lighter</option>
                        <option value='light'>Light</option>
                        <option value='dark'>Dark</option>
                        <option value='darker'>Darker</option>
                    </select>
                </div>
            </div>
            <div className='color'>
                {/* Show all color based on the filter that has been selected*/}
                {(filter && filter.length > 0 ? filter : data).map(e => (
                    <div key={e.id} className='item-wrap'>
                        <div className='item'>
                            <div className='color-hex' style={{ backgroundColor: `${e.hex}` }}></div>
                            <div className='color-name'>{e.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Color;