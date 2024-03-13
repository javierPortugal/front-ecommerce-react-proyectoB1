import portus from '../../src/img/portuslab-black.png';

function Home() {
    return (


        <div className="container page">
            <h1 className="text-success text-center">Bienvenidos!!</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                
                    <div className="grid gap-2 row-gap-3">
                        <img
                            src={portus} className="img-fluid"
                            alt="no_image"
                            style={{ maxHeight: "20rem", minHeight: "10rem" }}
                        />
                        <br /><br /><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum sed nobis nam libero nesciunt similique eligendi velit minima in dolores mollitia culpa, illum sequi nemo soluta saepe odio. Repudiandae!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur nobis nisi provident doloremque voluptates, quos quae maiores ducimus dolore, labore modi debitis perspiciatis ex rem nulla, tenetur quo vero!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio aut nesciunt commodi corrupti error molestiae reprehenderit officiis animi maxime veniam voluptate corporis aliquam sapiente temporibus, aspernatur accusamus sit! Cum!</p>
                    </div>
                    
                </div>
            </div>
        </div>


    );
}

                export default Home;