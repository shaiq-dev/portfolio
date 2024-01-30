import SectionHeading from 'components/SectionHeading'
import Accordion from 'components/Accordion'

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. EvenLorem ipsum dolor sit amet consectetur adipisicing elit. Even natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Pricing plans',
    paragraph,
  },
  {
    title: 'How to apply',
    paragraph,
  },
  {
    title: 'Purchasing process',
    paragraph,
  },
  {
    title: 'Usage guides',
    paragraph,
  },
]

const PeopleAlsoAsk = () => {
  return (
    <div className="with-section-gap">
      <SectionHeading heading="People also ask" />
      <div>
        {data.map((item, idx) => (
          <Accordion key={idx} label={item.title}>
            {item.paragraph}
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default PeopleAlsoAsk
