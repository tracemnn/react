import React from 'react';
import { Card, List, Button } from 'antd';

export default function ListCard() {
    return(
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>
            <Button type='primary' href='./test'>Сонгох</Button>
        </Card>
      </List.Item>
    )}
  />
    )
}

const data = [
    {
      title: 'Англи хэл',
      code: 'english',
    },
    {
      title: 'Монгол хэл',
    },
    {
      title: 'Орос хэл',
    },
    {
      title: 'Математик',
    },
    {
      title: 'Нийгмийн ухаан',
    },
    {
      title: 'Түүх',
    },
    {
      title: 'Физик',
    },
    {
      title: 'Хими',
    },
    {
      title: 'Биологи',
    },
    {
      title: 'Газарзүй',
    },
  ];