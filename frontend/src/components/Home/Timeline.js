import React from "react";
import "../../styles/Timeline.css"

export default function Timeline() {
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="https://bootstrapbrain.com/demo/components/processes/process-1/assets/img/process-img-1.png"
                alt="Our Design Process"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">How it Works</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    Our design approach is very organized to ensure satisfaction
                    for our esteemed clients.
                  </p>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        1
                      </span>
                    </div>
                    <div className="timeline">
                      <h4 className="mb-3">Sign Up</h4>
                      <p className="mb-0 text-secondary">
                      Create your account to get started.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        2
                      </span>
                    </div>
                    <div className="timeline">
                      <h4 className="mb-3">Find Groups</h4>
                      <p className="mb-0 text-secondary">
                      Search for study groups that suit your needs.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        3
                      </span>
                    </div>
                    <div className="timeline">
                      <h4 className="mb-3">Join Sessions</h4>
                      <p className="mb-0 text-secondary">
                      Participate in study sessions and collaborate with peers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
