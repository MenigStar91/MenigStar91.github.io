function filterJobs() {
    // Get selected options
    const selectedOptions = Array.from(document.getElementById('jobDomain').selectedOptions);
    
    // Extract values from selected options
    const selectedValues = selectedOptions.map(option => option.value);

    // Perform filtering logic (replace this with your actual filtering logic)
    const filteredResults = getFilteredResults(selectedValues);

    // Display filtered results
    displayResults(filteredResults);
}

// Replace this function with your actual filtering logic
function getFilteredResults(selectedValues) {
    // Simulated job data (replace with your actual job data)
    const jobs = [
        { title: 'Software Engineer', domain: 'it' },
        { title: 'Financial Analyst', domain: 'finance' },
        { title: 'Marketing Coordinator', domain: 'marketing' },
        { title: 'Mechanical Engineer', domain: 'engineering' },
        // Add more job data as needed
    ];

    // Filter jobs based on selected domains
    return jobs.filter(job => selectedValues.includes(job.domain));
}

function displayResults(results) {
    const resultsContainer = document.getElementById('filteredResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No matching jobs found.</p>';
    } else {
        results.forEach(job => {
            const jobItem = document.createElement('p');
            jobItem.textContent = `${job.title} - ${job.domain.toUpperCase()}`;
            resultsContainer.appendChild(jobItem);
        });
    }
}
