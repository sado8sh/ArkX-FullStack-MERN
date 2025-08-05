const fetchUsersData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { users } = await response.json();

        const processedUsers = users
            .filter(({ gender }) => gender != 'male')
            .map(({ firstName, lastName, age }) => `Name: ${firstName} ${lastName}, Age: ${age}`);

        const totalMaleAge = users
            .filter(({ gender }) => gender == 'male')
            .reduce((sum, { age }) => sum + age, 0);

        console.log('Processed Users:', processedUsers);
        console.log('Total Age of Male Users:', totalMaleAge);

    } catch (error) {
        console.error('Error fetching users data:', error);
    }
};

fetchUsersData();