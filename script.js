const apiEP = "https://randomuser.me/api?results=6";

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

const disContactScreen = () => {
  //Hide App Screen
  document.querySelector(".appScreen").remove();
  // Show ContactList Screen
  document.querySelector(".contactListScreen").style.display = "block";

  fetchUsers(apiEP);
};

const fetchUsers = async (url) => {
  //async and await method
  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;

  //hide the spinner
  document.querySelector(".showSpinner").style.display = "none";

  //show the user
  displayContactlist(userList);
};

//display Contact List
const displayContactlist = (userList) => {
  document.getElementById("list").style.display = "block";

  let str = "";

  userList.map((item, i) => {
    str += ` <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse${i}"
                      aria-expanded="false"
                      aria-controls="collapse${i}"
                    >
                      <img
                        src="${item.picture.large}"
                        alt=""
                        width="50px"
                        class="rounded-circle"
                      />
                      <div class="ms-2">
                        <div class="fw-bolder">${item.name.title} ${item.name.first}
                        ${item.name.last}</div>
                        <small>${item.location.street.number}
                        ${item.location.street.name}</small>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapse${i}"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      class="accordion-body d-flex flex-column align-items-center"
                    >
                      <img
                        src="${item.picture.large}"
                        alt=""
                        width="150px"
                        class="rounded-circle"
                      />
                      <div>
                        <div class="fw-bolder">
                          <i class="bi bi-person"></i>
                          ${item.name.title} ${item.name.first}
                          ${item.name.last}
                        </div>
                        <div>
                          <a href="tel:${item.cell}">
                            <i class="bi bi-phone"></i>
                           ${item.cell}
                          </a>
                        </div>
                        <div>
                          <a href="mailto:${item.email}">
                            <i class="bi bi-envelope"></i>
                          ${item.email}
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://www.google.com/maps/${item.location.street.number}+
                            ${item.location.street.name}+ ${item.location.city} + 
                            ${item.location.state} + ${item.location.country}"
                            target="_blank"
                          >
                            <i class="bi bi-geo-alt"></i>
                            ${item.location.street.number}
                            ${item.location.street.name}
                            ${item.location.state}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  });

  document.getElementById("userAccordion").innerHTML = str;

  document.getElementById("userCount").innerText = userList.length;
};

//search contact
document.getElementById("search").addEventListener("keyup", (e) => {
  const { value } = e.target;

  const filteredUsers = userList.filter((item) => {
    const name = (item.name.first + " " + item.name.last).toLowerCase();

    return name.includes(value.toLowerCase());
  });

  displayContactlist(filteredUsers);
});
