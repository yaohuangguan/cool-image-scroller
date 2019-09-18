const data = [
  {
    name: "Kobe Byrant",
    age: 42,
    gender: "male",
    lookingfor: "female",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Tom Hanks",
    age: 50,
    gender: "male",
    lookingfor: "female",
    location: "Los Angeles CA",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Emma Watson",
    age: 29,
    gender: "female",
    lookingfor: "male",
    location: "London",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Sara Jack",
    age: 21,
    gender: "female",
    lookingfor: "male",
    location: "Columbus OH",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const profiles = profileIterator(data);

nextProfile();

document.querySelector("#next").addEventListener("click", nextProfile);
function nextProfile() {
  const currentProfile = profiles.next().value;

  document.getElementById("profileDisplay").innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name:${currentProfile.name}</li>
  <li class="list-group-item">Age:${currentProfile.age}</li>
  <li class="list-group-item">Gender:${currentProfile.gender}</li>
  <li class="list-group-item">location:${currentProfile.location}</li>
  <li class="list-group-item">Preference:${currentProfile.lookingfor}</li>
  </ul>`;
  document.getElementById(
    "imageDisplay"
  ).innerHTML = `<img src="${currentProfile.image}">`;
}

// function* profileIterator(profiles) {
//   let nextIndex = 0;
//   while (nextIndex < profiles.length) {
//     yield profiles[nextIndex++];
//   }

// }
function profileIterator(profiles) {
  let index = 0;
  return {
    next: function() {
      if (index < profiles.length) {
        return { value: profiles[index++], done: false };
      } else {
        index = 1;
        return { value: profiles[0], done: false };
      }
    }
  };
}
