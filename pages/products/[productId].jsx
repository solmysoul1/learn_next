import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';

export default function ProductDetailPage({ msg, productInfo }) {
	const title = '상품 상세 정보 페이지';
	return (
		<div>
			<ProductHeader title={title} />
			<div>ProductDetailPage - {msg}</div>
			<p>{productInfo.name}</p>
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const response = await axios.get(`http://localhost:4000/products/${id}`);

	return {
		props: {
			msg: '서버에서 보낸 데이터',
			productInfo: response.data,
		},
	};
}
