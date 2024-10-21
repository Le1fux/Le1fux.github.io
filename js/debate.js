function showDebate(title, topic, proArgument, againstArgument) {
    // Set the title and arguments in the article section
    document.getElementById('debate-title').innerText = topic;
    document.getElementById('pro-argument').innerText = proArgument;
    document.getElementById('against-argument').innerText = againstArgument;
    
    // Show the debate article
    document.getElementById('debate-article').style.display = 'block';
}

function closeDebate() {
    // Hide the debate article
    document.getElementById('debate-article').style.display = 'none';
}