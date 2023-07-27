import React from 'react';
import ProductHeader from '../components/ProductHeader';
import CheckoutForm from '../components/CheckoutForm';
import PageContainer, { PageContainerTypes } from '../components/PageContainer';

export default function CheckOut() {
  return (
    <>
      <ProductHeader />
      <PageContainer type={PageContainerTypes.product}>
        <CheckoutForm />
      </PageContainer>
    </>
  );
}
