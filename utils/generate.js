function generateJS(data) {
    return `
# ${data.title}

# ${data.email}

# ${data.github}

`
}

module.exports = generateJS;