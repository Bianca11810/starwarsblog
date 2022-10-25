const single = props => {
    return(
        <div className="container">
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						className="img-fluid"
						src="https://www.lacasadeel.net/wp-content/uploads/2020/10/darth-vader-6-cover-TALL.jpg"
					/>
				</div>
             </div>
             <div className="col-12 col-md-6 text-center">
                 {/* props. name  */}
                 <p>Bacon ipsum dolor amet biltong pork belly chislic pork loin pork strip steak tri-tip pancetta spare ribs. Ground round ribeye pig, frankfurter hamburger short ribs salami. Flank bresaola shankle alcatra, pork shoulder ham cow. Jowl jerky alcatra venison. Ball tip alcatra tongue, turkey sausage kielbasa boudin t-bone short ribs kevin tail andouille filet mignon corned beef. Short ribs flank bresaola jerky, rump ball tip chislic shankle jowl drumstick doner. Landjaeger ham hock beef ribs boudin, venison beef pork loin doner frankfurter turkey porchetta turducken.
                 </p>
             </div>
             <div className="row text-center text-info mb-3">
				<div className="col-12 col-md-4 border rounded shadow py-3">
					<h6>Gender</h6>
				</div>
				<div className="col-12 col-md-4 border rounded shadow py-3">
					<h6>Hair color</h6>
				</div>
				<div className="col-12 col-md-4 border rounded shadow py-3">
					<h6>Eye color</h6>
				</div>
                <span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
			</div>
        </div>
       
)}
