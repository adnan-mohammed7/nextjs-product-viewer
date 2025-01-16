import styles from "@/styles/ProductDetails.module.css"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetails() {
    const { data, error } = useSWR('https://fakestoreapi.com/products/', fetcher);

    let result = []
    if (data) {
        data.forEach(element => {
            result.push(<tr key={element.id} data-id={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.price}</td>
                <td>{element.description}</td>
                <td><img className={styles.images} src={element.image} alt={element.title}></img> </td>
                <td>{element.category}</td>
                <td>Rate: {element.rating.rate}, Count: {element.rating.count}</td>
            </tr>)
        });
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>BodyAttributes</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </>
    );
}