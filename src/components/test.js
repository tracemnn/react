import React, { useEffect, useState } from "react";
import { Card, Form, Button, List, Radio } from "antd";

export default function Test() {
  let ques = [
    { id: 1, name: "", isCorrect: "" },
    { id: 2, name: "", isCorrect: "" },
    { id: 3, name: "", isCorrect: "" },
    { id: 4, name: "", isCorrect: "" },
    { id: 5, name: "", isCorrect: "" },
    { id: 6, name: "", isCorrect: "" },
    { id: 7, name: "", isCorrect: "" },
  ];
  const onChange = (e: RadioChangeEvent, w, id) => {
    const objectToUpdate = ques.find((obj) => obj.id == id);
    if (objectToUpdate) {
      objectToUpdate.name = e.target.value;
      if (e.target.value === w) {
        objectToUpdate.isCorrect = "1";
      } else {
        objectToUpdate.isCorrect = "0";
      }
    }

    console.log(ques);
  };

  const [count, setCount] = useState(0);

  var correctCount = 0;
  const onClick = () => {
    ques.forEach((obj) => {
      if (obj.isCorrect === "1") {
        correctCount++;
      }
    });
    if (correctCount != 0) {
      setCount(correctCount);
      correctCount = count;
      console.log(ques);
    }
  };

  return (
    <Form style={{ marginLeft: 25, marginRight: 600 }}>
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
              <Radio.Group
                onChange={(e) => {
                  onChange(e, item.w, item.id);
                }}
              >
                <Radio value={item.a}>{item.a}</Radio>
                <Radio value={item.b}>{item.b}</Radio>
                <Radio value={item.c}>{item.c}</Radio>
              </Radio.Group>
            </Card>
          </List.Item>
        )}
      />
      <Button type="primary" href={`/result?count=${count}`} onClick={onClick}>
        Submit
      </Button>
    </Form>
  );
}

const test = [
  {
    id: "1",
    q: "They threw a rock _____ the window and broke the glass",
    a: "through",
    b: "across",
    c: "into",
    w: "through",
  },
  {
    id: "2",
    q: "When ____?",
    a: "did you arrived",
    b: "did you arrive",
    c: "were you arrived",
    w: "did you arrive",
  },
  {
    id: "3",
    q: "He didnt speak English, _____ it was difficult to make him understand what he had to do.",
    a: "although",
    b: "because",
    c: "so",
    w: "so",
  },
  {
    id: "4",
    q: 'Why did you turn off the TV?" B: "Because I _____. I am very tired',
    a: "go to sleep",
    b: "will go to sleep",
    c: " am going to sleep",
    w: " am going to sleep",
  },
  {
    id: "5",
    q: "This is the famous wine _____ is produced in this region.",
    a: "where",
    b: "which",
    c: "that it",
    w: "which",
  },
  {
    id: "6",
    q: "We _____ last Tuesday. We _____ here for over a week.",
    a: "arrived / have been",
    b: "have arrived / have been",
    c: "have arrived / were",
    w: "arrived / have been",
  },
  {
    id: "7",
    q: "I didnt see _____ strange when I went into the room.",
    a: "nothing",
    b: "anything",
    c: "something",
    w: "anything",
  },
];
