import './styles.css'

export const TextInput = ({searchValue, onChange}) => {
    return(
        <input 
            className='text-input'
            onChange={onChange}
            value={searchValue}
            placeholder='Type your search'
            type='search' 
        />
    )
}