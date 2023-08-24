import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch, currency } = useContext(AppContext);
    const [Currency, setCurrency] = useState("£");
    const handleChangeCurrency = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(selectedCurrency); // Update the local state with the selected currency
        dispatch({
            type: "CHG_CURRENCY",
            payload: selectedCurrency, // Use the selected currency in the payload
        });
    };
    const currencyOptions = {
        "$": "$ Dollar",
        "€": "€ Euro",
        "₹": "₹ Rupee",
        "£": "£ Pound"
    };

    return (
        <>

            <div className='alert-secondary alert' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="inputGroupSelectCurrency">Currency: </label>
                {/* <select
                    style={{ width: "10vw" }}
                    onChange={handleChangeCurrency}
                    className="custom-select-currency form-select form-select-sm"
                    id="inputGroupSelectCurrency"
                    value={currency}
                >
                    <option value={currency}>{currency}</option>

                    {["$", "€", "₹", "£"].map((optionCurrency) => (
                        optionCurrency !== currency && (
                            <option key={optionCurrency} value={optionCurrency} name={optionCurrency}>
                                {optionCurrency}
                            </option>
                        )
                    ))}
                </select> */}

                <select
                    style={{ width: "10vw" }}
                    onChange={handleChangeCurrency}
                    className="custom-select-currency form-select form-select-sm"
                    id="inputGroupSelectCurrency"
                    value={currency}
                >
                    <option value={currency}>{currencyOptions[currency]}</option>

                    {Object.keys(currencyOptions).map((optionCurrency) => (
                        optionCurrency !== currency && (
                            <option key={optionCurrency} value={optionCurrency} name={optionCurrency}>
                                {currencyOptions[optionCurrency]}
                            </option>
                        )
                    ))}
                </select>


            </div>
        </>
    )
}

export default Currency