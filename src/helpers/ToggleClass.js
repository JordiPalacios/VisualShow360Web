export const classToToggle = (SectionId, ElementId, classToggle) => {
    let selectedSection = document.querySelector(SectionId)
    let selctedElement = document.querySelector(ElementId)
    selctedElement.addEventListener('click', () => {
    selectedSection.classList.toggle(classToggle)
})
}