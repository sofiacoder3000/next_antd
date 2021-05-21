import { Button, Space, DatePicker, Card, Avatar } from 'antd';
import {
	CiCircleFilled,
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from '@ant-design/icons';

const { Meta } = Card;

export default function Home() {
	const onChange = () => {};
	return (
		<div style={{ padding: 100 }}>
			<h1>Prueba 001</h1>
			<Space direction="vertical">
				<Button type="primary">Primary Button</Button>
				<Button type="ghost">Ghost Button</Button>
				<DatePicker onChange={onChange} />
				<CiCircleFilled />
			</Space>
			<Card
				style={{ width: 300 }}
				cover={
					<img
						alt="example"
						src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
					/>
				}
				actions={[
					<SettingOutlined key="setting" />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />
				]}
			>
				<Meta
					avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					}
					title="Card title"
					description="This is the description"
				/>
			</Card>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
					/>
				}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
			</Card>
		</div>
	);
}
