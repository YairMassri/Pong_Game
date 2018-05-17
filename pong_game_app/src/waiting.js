import $ from "jquery";

function waiting(text) {
    var container = document.createElement("div");
    container.classList.add('waiting');
    container.setAttribute("id", "waiting");
    container.innerHTML = `
    <div class="psoload">
    <div class="stright"></div>
    <div class="curve"></div>
    <div class="center"></div>
    <div class="inner"></div>
    </div>
    <h3>${text || 'WAITING FOR OPPONENT'}</h3>
    `;

    document.body.prepend(container);
}

export const remove = function () {
    console.log('Running??????????????');
    $("#waiting").remove();
}

export default waiting;