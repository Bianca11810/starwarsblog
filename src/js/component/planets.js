

	return (
		<div className="col">
			<div className="card shadow my-3">
				
				<div className="card-body">
					<h5 className="card-title">
						<strong>Name:</strong> {props.planets.name}
					</h5>
					<p className="card-text">
						<strong>Diameter:</strong> {props.planets.diameter}
					</p>
					<p className="card-text">
						<strong>Population:</strong> {props.planets.population}
					</p>
					<p className="card-text">
						<strong>Terrain:</strong> {props.planets.terrain}
					</p>
					<div className="row">
						<div className="col-6">
							
								<div className="btn btn-primary">Learn More</div>
						
						</div>
						<div className="col-6">
							
								<div className="btn btn-outline-warning">
									<i className="fas fa-heart" />
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);

