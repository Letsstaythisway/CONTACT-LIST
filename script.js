const apiEP = "https://randomuser.me/api?results=2";

let userList = [];

/// Slide to go to another AppScreen

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 70) {
    label.textContent = "";
    disAppScreen();
  } else {
    label.textContent = "Slide to Unlock";
  }
});

const disAppScreen = () => {
  //Hide Home Screen
  document.querySelector(".homeScreen").remove();
  // Show App Screen
  document.querySelector(".appScreen").style.display = "block";
};

const fetchUsers = async (url) => {
  //fetch the user from the API
  //promise method
  // fetch(url)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(erro);
  //   });

  //async and await method
  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;

  //hide the spinner
  document.querySelector(".showSpinner").style.display = "none";

  //show the user
  displayContactlist(userList);
};

fetchUsers(apiEP);

//display Contact List
const displayContactlist = (userList) => {
  console.log(userList);
  document.getElementById("list").style.display = "block";

  const str = ` <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                        alt=""
                        width="50px"
                        class="rounded-circle"
                      />
                      <div class="ms-2">
                        <div class="fw-bolder">Subodh Ranabhat</div>
                        <small>4-6 Caroline Street</small>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      class="accordion-body d-flex flex-column align-items-center"
                    >
                      <img
                        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                        alt=""
                        width="150px"
                        class="rounded-circle"
                      />
                      <div>
                        <div class="fw-bolder">
                          <i class="bi bi-person"></i>
                          Subodh Ranabaht
                        </div>
                        <div>
                          <a href="tel:123456789">
                            <i class="bi bi-phone"></i>
                            123456789
                          </a>
                        </div>
                        <div>
                          <a href="mailto:xyz@gmail.com">
                            <i class="bi bi-envelope"></i>
                            xyz@gmail.com
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.google.com/maps?sca_esv=ad651d970e92dbeb&output=search&q=westmead&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkW1DRbm01j6DCVS0r1sTxn7h_rt6mVhwDmwtd3hPZjM8xOYJM4hmmrxWbUY3sD5VWIFJq8NvoVn81Lmtlm71HJeBII-M4srnbDxQrLSK8JTNSHCUv4bGtiZ9U-tyXiC-L7zb8wEV2PO73O2FcTNucem0T5OL48EWMWuFuOLRLfKJHk6Iwbt54smbWdBBZoxD4W2GVDmw&entry=mc&ved=1t:200715&ictx=111"
                            target="_blank"
                          >
                            <i class="bi bi-geo-alt"></i>
                            Westmead 2145
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

  userList.map((item, i));

  document.getElementById("userAccordion").innerHTML = str;
};
