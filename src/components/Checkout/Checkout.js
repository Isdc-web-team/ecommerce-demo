import { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MultiStepForm, Step } from 'react-multi-form';
import { FoodDataContext } from "../../provider/reducers/cartProvider";

const Checkout = () => {
    const { state } = useContext(FoodDataContext);
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    });

    const total = state.cart.map(p => p.price * p.quantity);
    const totalPrice = total.reduce((a, b) => a + b, 0);

    const [formData, setFormData] = useState({
        cartItems: state.cart,
        totalAmount: totalPrice,
        deliveryMethod: 'Courier',
        numItem: state.cart.length || 1,
        customerInfo: {
            name: '',
            email: '',
            add1: '',
            city: '',
            state: '',
            postCode: '',
            country: 'Bangladesh',
            phone: '',
            fax: ''
        },
        shippingInfo: {
            name: '',
            email: '',
            add1: '',
            city: '',
            state: '',
            postCode: '',
            country: 'Bangladesh',
        }
    });

    const onNameChange = (event) => {
        const { name, value } = event.target;
        setName((state) => ({
            ...state,
            [name]: value.trim(),
        }))
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((state) => ({
            ...state,
            [name]: value.trim(),
        }))
    };

    const handleInputChangeCustom = (event) => {
        const { name, value } = event.target;
        setFormData((state) => ({
            ...state,
            customerInfo: {
                ...state.customerInfo,
                [name]: value.trim(),
            }
        }))
    };

    const handleInputChangeShopping = (event) => {
        const { name, value } = event.target;
        setFormData((state) => ({
            ...state,
            shippingInfo: {
                ...state.shippingInfo,
                [name]: value
            }
        }))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <MultiStepForm activeStep={active}>
                        <Step label="Customer">
                            <h1>Setup 1</h1>
                        </Step>
                        <Step label="Shipping">
                            <h1>Setup 2</h1>
                        </Step>
                        <Step label="Payment">
                            <h1>Setup 3</h1>
                        </Step>
                    </MultiStepForm>
                    {active !== 1 && (
                        <button
                            type="button"
                            onClick={() => setActive(active - 1)}
                        >
                            <span>
                                <IoIosArrowBack /> &nbsp; Previous
                            </span>
                        </button>

                    )}
                    <button onClick={() => setActive(active +  1)} >
                        <span>
                            Next &nbsp; <IoIosArrowForward />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout