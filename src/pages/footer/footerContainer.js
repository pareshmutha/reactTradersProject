import React from 'react';
import {Container} from 'react-bootstrap';
const FooterContainer = () =>{
    return (
        <>
             {/* <footer class="bg-dark" id="tempaltemo_footer">
          <div class="container">
              <div class="row">

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-success border-bottom pb-3 border-light logo">Traders</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              India
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">000-000-0000</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">info@company.com</a>
                          </li>
                      </ul>
                  </div>

              </div>

              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2021 Traders 
                          </p>
                      </div>
                  </div>
              </div>
          </div>

        </footer> */}
          <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              TrueTraders24
            </p>
          </nav>
        </Container>
      </footer>
        </>
    )
};

export default FooterContainer;