import React from 'react';
import { Card, List, Button } from 'antd';
import { useLocation } from 'react-router-dom';

export default function Result() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const count = queryParams.get('count');
    return(
        <div>
            <h1>Таны оноо: 7/{count}</h1>
            <Button type='default' href='./test'>Дахин оролдох</Button>
        </div>
    )
}