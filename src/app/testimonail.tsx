const Testimonials = [
  {
    quote:
      'Open-EDU has transformed the way I learn. The personalized AI tutoring is simply amazing.',
    author: 'John Doe',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy1.png`,
    position: 'Student',
  },
  {
    quote:
      'The 1:1 learning approach at Open-EDU has made a significant difference in my understanding of complex subjects.',
    author: 'Jane Smith',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/girl1.png`,
    position: 'Student',
  },
  {
    quote:
      'I appreciate the real-time feedback feature. It helps me stay on track and improve my learning outcomes.',
    author: 'Alex Johnson',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy2.png`,
    position: 'Student',
  },
  {
    quote:
      'Open-EDU has transformed the way I learn. The personalized AI tutoring is simply amazing.',
    author: 'John Doe',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy1.png`,
    position: 'Student',
  },
  {
    quote:
      'The 1:1 learning approach at Open-EDU has made a significant difference in my understanding of complex subjects.',
    author: 'Jane Smith',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/girl1.png`,
    position: 'Student',
  },
  {
    quote:
      'I appreciate the real-time feedback feature. It helps me stay on track and improve my learning outcomes.',
    author: 'Alex Johnson',
    image: `https://${process.env.NEXT_PUBLIC_SERVER_URL}/i/boy2.png`,
    position: 'Student',
  },
];

{
  /* 
        |-------------------------------|
        | Testimonial Cards BY SECTION  |
        |-------------------------------|
        */
}
{
  /* <section className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20 py-20 border-t">
          <div className="text-2xl font-bold mb-4">What Users Say</div>
          <div className="px-6 flex flex-col md:flex-col lg:flex-row justify-center space-x-4 gap-8 sm:grid sm:grid-cols-1 sm:gap-8">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="min-w-full"
            >
              <CarouselContent>
                {Testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Avatar>
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback className=" p-4">CN</AvatarFallback>
                          </Avatar>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote>"{testimonial.quote}"</blockquote>
                      </CardContent>
                      <CardHeader className=" items-end">
                        <CardTitle>{testimonial.author}</CardTitle>
                        <CardDescription>
                          {testimonial.position}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section> */
}
