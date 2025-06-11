export default function ServiceCard({ service }) {
  const { serviceName, category, description, imgUrl, id } = service;
  return (
    <div>
      <a href={`/services/${id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={imgUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {serviceName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
