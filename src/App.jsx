import Accordion from "./components/Accordion/Accordion";

// import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>우리와 협업하는 이유는 무엇일까요?</h1>

        <Accordion className="accordion">
          <Accordion.Item 
            id="experience"
            className="accordion-item"
            title="저희는 20년 이상의 경험을 가지고 있습니다"
          >
            <article>
              <p>우리를 선택하면 실망하지 않으실 겁니다.</p>
              <p>
                저희는 20년 이상 맞춤형 휴가 여행을 계획하는 사업을 하고
                있습니다.
              </p>
            </article>
          </Accordion.Item >

          <Accordion.Item 
            id="local-guides"
            className="accordion-item"
            title="저희는 현지 가이드와 협력하고 있습니다."
          >
            <article>
              <p>우리는 사무실에서만 이 일을 하지 않습니다.</p>
              <p>
                대신, 우리는 현지 가이드와 함께하여 안전한 휴가를 보장합니다.
              </p>
            </article>
          </Accordion.Item >
        </Accordion>
      </section>
    </main>
  );
}

export default App;
