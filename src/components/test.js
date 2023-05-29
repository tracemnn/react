import React, {useState} from 'react';
import { Card, Form, Button, List, Radio } from 'antd';

export default function Test() {
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const onChange = (e: RadioChangeEvent, w) => {
        console.log('', e.target.value);
        if(e.target.value === w){
            console.log('correct')
        }else{
            console.log('incorrect')
        }
        // setValue(e.target.value);
      };
    const count = 0;


    return(
        <Form style={{marginLeft:25, marginRight:600}}>
            <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 1,
      xxl: 3,
    }}
    dataSource={test}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.q}>
        <Radio.Group onChange={(e)=>{onChange(e,item.w)}}>
            <Radio value={item.a}>{item.a}</Radio>
            <Radio value={item.b}>{item.b}</Radio>
            <Radio value={item.c}>{item.c}</Radio>
        </Radio.Group>
        </Card>
      </List.Item>
    )}
  />
            <Button type='primary' href='./result'>Submit</Button>
        </Form>
            

    )
}

const test = [
    {
        q: 'They threw a rock _____ the window and broke the glass',
        a: 'through',
        b: 'across',
        c: 'into',
        w: 'through'
    },
    {
        q: 'When ____?',
        a: 'did you arrived',
        b: 'did you arrive',
        c: 'were you arrived',
        w: 'did you arrive'
    },
    {
        q: 'He didnt speak English, _____ it was difficult to make him understand what he had to do.',
        a: 'although',
        b: 'because',
        c: 'so',
        w: 'so'
    },
    {
        q: 'Why did you turn off the TV?" B: "Because I _____. I am very tired',
        a: 'go to sleep',
        b: 'will go to sleep',
        c: ' am going to sleep',
        w: ' am going to sleep'
    },
    {
        q: 'This is the famous wine _____ is produced in this region.',
        a: 'where',
        b: 'which',
        c: 'that it',
        w: 'which'
    },{
        q: 'We _____ last Tuesday. We _____ here for over a week.',
        a: 'arrived / have been',
        b: 'have arrived / have been',
        c: 'have arrived / were',
        w: 'arrived / have been'
    },
    {
        q: 'I didnt see _____ strange when I went into the room.',
        a: 'nothing',
        b: 'anything',
        c: 'something',
        w: 'anything'
    }
]