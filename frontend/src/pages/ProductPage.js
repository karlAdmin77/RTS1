import React from 'react'
import { useParams } from 'react-router-dom';

function ProductPage() {
    const params = useParams();
    const {idCode} = params;
    return <div>{idCode}</div>;
}

export default ProductPage;
