import "./App.css";
import "./index.css";
function App() {
  return (
    <div>
    <div class="back">
    <div class="container">
      <div class="row">
        <div class="col align-self-center"><br></br>
          <h1 class="text-center">Contact Us</h1>
          {/* <!-- contact form --> */}
          <form>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter your E-mail"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="Enter E-mail Subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form><br></br>
          <div class="para"><p1>Knowing the opinion of our customers is very important to us, we extend the invitation to fill out our form 
                 to request information about the services we offer.
             As soon as possible, one of our representatives will attend your request.  </p1></div><br></br>
        </div>
      </div>
      </div>
      <p></p><br></br><br></br><br></br><br></br><br></br>
      </div>
      
      </div>
  );
}

export default App;