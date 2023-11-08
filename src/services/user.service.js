class UserService {
    signUp = async (userInput) => {
        const hashedPassword = await bcrypt.hash(userInput.password);

        await prisma.user.create({
            data: {
                ...userInput,
                password: hashedPassword
            },
            select: {
                id: true
            }
        });
    };
}
