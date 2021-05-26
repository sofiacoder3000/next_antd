import { Button, Space, DatePicker, Card, Avatar, List } from 'antd';
import {
  CiCircleFilled,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import MenuDouble from '../components/MenuDouble';
import FirstLayout from '../components/FirstLayout';
import Navbar from '../components/Navbar';
import Title from '../components/Title';

const { Meta } = Card;

export default function Home() {
  const quizzes = [
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    },
    {
      title: '¿Qué vas a vender después de las elecciones?',
      cover_img:
        'https://www.elpais.com.co/files/article_main/uploads/2017/02/05/5897d0341a59a.jpeg'
    }
  ];

  const onChange = () => {};
  return (
    <div style={{ padding: 10 }}>
      <Navbar />
      <Title>Quizz Like!</Title>
      <Space direction="vertical">
        {/*         <Button type="primary">Primary Button</Button>
         */}{' '}
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
      <FirstLayout props={{ quizzes, name: 'kathy' }} />
      {/* <div style={{ display: 'flex' }}>{cardsQuizzes}</div> */}
    </div>
  );
}
