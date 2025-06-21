import '../collection.css';
import CollectionSvg from '../assets/images/collection.svg';

const Collection = () => {
    return (
        <div className="d-flex justift-content-between">
            <div>
                <p className="text-dark fs-3">
                    Collection
                </p>
                <p className="text-dark fs-5">you can explore ans shop many differnt collection
                from various barands here.</p>
                <button className="btn btn-dark">Show now</button>
            </div>
            <img className='custom-size' src={CollectionSvg} />
        </div>
    );
}

export default Collection;