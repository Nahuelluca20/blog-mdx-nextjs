export default function page() {
  return (
    <div>
      <h1 className="text-2xl mb-5 font-bold">About</h1>
      <div className="space-y-5 text-lg	font-medium leading-7">
        <p>
          Hello, {`I'm`} Nahuel! 👋 {`I'm`} a passionate Frontend Developer dedicated to crafting
          captivating web experiences. My expertise lies in leveraging cutting-edge technologies,
          specializing in development with React, Next.js, and Remix.
        </p>
        <p>
          I wield Tailwind CSS to style my creations with both elegance and efficiency. Beyond that,
          I love working with modern databases, and my current go-to is Supabase, providing an
          unparalleled development experience.
        </p>
        <p>
          In my journey to build robust applications, I rely on Prisma for efficient and secure data
          access layer management. For authentication, Clerk is my trusted ally, ensuring a secure
          and seamless login experience for users.
        </p>
        <p>
          Join me on this exploration through my blog, where {`I'll`} share insights, experiences,
          and tips from the world of frontend development. Together, {`let's`} delve into the
          fascinating universe of modern web creation! 🚀✨
        </p>
      </div>
    </div>
  );
}
