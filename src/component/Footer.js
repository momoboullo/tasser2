import React , {Component} from 'react';

class Footer extends Component{
    render() {
        return(
            <div>
                <footer className="p-1 bg-warning text-white text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <h3>Copyright &copy; 2019 </h3>
                                <h6>All Rights Reserved Developed & Maintained by
                                    <a className="text-dark" href="https://www.facebook.com/profile.php?id=100033857033325"> Mohamed Ali Boullo
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
}
export default Footer;