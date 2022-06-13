import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <div className='cartwidget'>
            <FontAwesomeIcon icon={faMotorcycle} className="cartwidget-icono"/>
            <p className='cartwidget-cantidad'>0</p>
        </div>
    )
}

export default CartWidget;