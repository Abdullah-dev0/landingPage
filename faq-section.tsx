import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#424867]">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg shadow-sm px-6 py-2 bg-white">
          <AccordionTrigger className="text-lg hover:no-underline">
            <span className="text-[#FF7759]">How many prospects do you reach out to each month?</span>
          </AccordionTrigger>
          <AccordionContent className="text-[#424867] pt-4 pb-2">
            For most of our clients we manage campaigns for we reach out to between 3,000 to 6,000 prospects per month.
            The largest campaigns we manage are generally around 30,000 prospects per month.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg shadow-sm px-6 py-2 bg-white">
          <AccordionTrigger className="text-lg hover:no-underline">
            <span className="text-[#424867]">How many emails do you send to each prospect?</span>
          </AccordionTrigger>
          <AccordionContent className="text-[#424867] pt-4 pb-2">
            We typically send a series of carefully crafted follow-up emails to each prospect.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg shadow-sm px-6 py-2 bg-white">
          <AccordionTrigger className="text-lg hover:no-underline">
            <span className="text-[#424867]">What countries can you target?</span>
          </AccordionTrigger>
          <AccordionContent className="text-[#424867] pt-4 pb-2">
            We can target prospects globally across multiple countries and regions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg shadow-sm px-6 py-2 bg-white">
          <AccordionTrigger className="text-lg hover:no-underline">
            <span className="text-[#424867]">Will this work for me?</span>
          </AccordionTrigger>
          <AccordionContent className="text-[#424867] pt-4 pb-2">
            Our approach is tailored to each client's specific needs and industry.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg shadow-sm px-6 py-2 bg-white">
          <AccordionTrigger className="text-lg hover:no-underline">
            <span className="text-[#424867]">Where can I learn more?</span>
          </AccordionTrigger>
          <AccordionContent className="text-[#424867] pt-4 pb-2">
            Contact our team for more detailed information about our services.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

