const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note")
  note.innerHTML = `
        <div class="tool">
            <i class="fa-solid fa-floppy-disk"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
          <textarea></textarea>
      `;
 main.appendChild(note)
};

addbtn.addEventListener("click", function () {
  addNote();
});
