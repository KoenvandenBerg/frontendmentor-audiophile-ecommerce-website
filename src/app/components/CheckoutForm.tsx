'use client';

import React, { useContext, useState } from 'react';
import checkoutFormStyles from '@/app/styles/CheckoutForm.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CartContext } from '../contexts/CartContext';
import SummaryItem from './SummaryItem';
import { get } from 'http';

interface IFormInput {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState('e-money');

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: 'all' });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert('Order placed.');
  };

  const { cartState } = useContext(CartContext);

  const getCartTotal = () => {
    const keys = Object.keys(cartState);
    const subTotals = keys.map(
      (product) => cartState[product].quantity * cartState[product].price
    );
    const total = subTotals.reduce((total, subtotal) => total + subtotal, 0);
    return total;
  };

  const shipping = getCartTotal() === 0 ? 0 : 50;

  return (
    <form
      className={checkoutFormStyles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={checkoutFormStyles.formContainer}>
        <h1>Checkout</h1>
        <div className={checkoutFormStyles.formSubContainer}>
          <h2>Billing Details</h2>

          <div className={checkoutFormStyles.checkoutForm}>
            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="name-input">Name</label>
              <p>{errors.name?.message}</p>
              <input
                id="name-input"
                type="text"
                {...register('name', {
                  required: 'This field is required.',
                })}
              />
            </div>

            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="email-input">Email Address</label>
              <p>{errors.email?.message}</p>
              <input
                id="email-input"
                type="email"
                {...register('email', {
                  required: 'This field is required.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Enter a valid e-mail address.',
                  },
                })}
              />
            </div>

            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="phone-input">Phone Number</label>
              <p>{errors.phoneNumber?.message}</p>
              <input
                id="phone-input"
                type="text"
                {...register('phoneNumber', {
                  required: 'This field is required.',
                })}
              />
            </div>
          </div>
        </div>

        <div className={checkoutFormStyles.formSubContainer}>
          <h2>Shipping Information</h2>
          <div className={checkoutFormStyles.checkoutForm}>
            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="address-input">Your Address</label>
              <p>{errors.address?.message}</p>
              <input
                id="address-input"
                type="text"
                {...register('address', {
                  required: 'This field is required.',
                })}
              />
            </div>

            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="zipcode-input">ZIP Code</label>
              <p>{errors.zipCode?.message}</p>
              <input
                id="zipcode-input"
                type="text"
                {...register('zipCode', {
                  required: 'This field is required.',
                })}
              />
            </div>

            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="city-input">City</label>
              <p>{errors.city?.message}</p>
              <input
                id="city-input"
                type="text"
                {...register('city', {
                  required: 'This field is required.',
                })}
              />
            </div>

            <div className={checkoutFormStyles.inputContainer}>
              <label htmlFor="country-input">Country</label>
              <p>{errors.country?.message}</p>
              <input
                id="country-input"
                type="text"
                {...register('country', {
                  required: 'This field is required.',
                })}
              />
            </div>
          </div>
        </div>

        <div className={checkoutFormStyles.formSubContainer}>
          <h2>Payment Details</h2>
          <div className={checkoutFormStyles.checkoutForm}>
            <label htmlFor="payment-method">Payment Method</label>
            <div className={checkoutFormStyles.radioContainer}>
              <div className={checkoutFormStyles.radioInputContainer}>
                <input
                  // name="payment-method"
                  id="e-money"
                  type="radio"
                  value="e-money"
                  onClick={() => setPaymentMethod('e-money')}
                  checked={paymentMethod === 'e-money'}
                  {...register('paymentMethod', {
                    required: 'This field is required.',
                  })}
                />
                <label htmlFor="e-money">e-Money</label>
              </div>

              <div className={checkoutFormStyles.radioInputContainer}>
                <input
                  // name="payment-method"
                  id="cod"
                  type="radio"
                  value="cod"
                  onClick={() => {
                    setPaymentMethod('cod');
                    unregister(['eMoneyNumber', 'eMoneyPIN']);
                  }}
                  checked={paymentMethod === 'cod'}
                  {...register('paymentMethod', {
                    required: 'This field is required.',
                  })}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>
            {paymentMethod === 'e-money' && (
              <div className={checkoutFormStyles.formSubContainer}>
                <div className={checkoutFormStyles.checkoutForm}>
                  <div className={checkoutFormStyles.inputContainer}>
                    <label htmlFor="emoneyNumber-input">e-Money Number</label>
                    <p>{errors.eMoneyNumber?.message}</p>
                    <input
                      id="emoneyNumber-input"
                      type="text"
                      {...register('eMoneyNumber', {
                        required: 'This field is required.',
                      })}
                    />
                  </div>

                  <div className={checkoutFormStyles.inputContainer}>
                    <label htmlFor="emoneyPIN-input">e-Money PIN</label>
                    <p>{errors.eMoneyPIN?.message}</p>
                    <input
                      id="emoneyPIN-input"
                      type="text"
                      {...register('eMoneyPIN', {
                        required: 'This field is required.',
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
            {paymentMethod === 'cod' && (
              <div className={checkoutFormStyles.codMessage}>
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                    fill="#D87D4A"
                  />
                </svg>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={checkoutFormStyles.summaryContainer}>
        <h2>Summary</h2>
        <div className={checkoutFormStyles.summaryItems}>
          {Object.keys(cartState).length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            Object.keys(cartState).map((product) => (
              <SummaryItem
                key={product}
                imageUrl={cartState[product].productImageUrl}
                productName={product}
                productPrice={cartState[product].price}
                quantity={cartState[product].quantity}
              />
            ))
          )}
        </div>
        <div className={checkoutFormStyles.summaryTextContainer}>
          <div className={checkoutFormStyles.summaryTextLine}>
            <p>Total</p>
            <p>€ {getCartTotal().toLocaleString('nl')}</p>
          </div>
          <div className={checkoutFormStyles.summaryTextLine}>
            <p>Shipping</p>
            <p>€ {shipping.toLocaleString('nl')}</p>
          </div>
          <div className={checkoutFormStyles.summaryTextBottomLine}>
            <p>Grand Total</p>
            <p>€ {(getCartTotal() + shipping).toLocaleString('nl')}</p>
          </div>
        </div>
        <input
          type="submit"
          value="Continue & Pay"
          className={checkoutFormStyles.submitButton}
          disabled={!isValid || getCartTotal() === 0}
        />
      </div>
    </form>
  );
}
