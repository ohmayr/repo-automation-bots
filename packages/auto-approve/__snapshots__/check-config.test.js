exports['check for config whether config is a valid YAML object should return error message if YAML is invalid 1'] = `
File is not properly configured YAML
`

exports['check for config whether YAML file has valid schema should fail if YAML has any other properties than the ones specified 1'] = `
[{"wrongProperty":{"additionalProperty":"notTheRules"},"message":"must NOT have additional properties"}]
`

exports['check for config whether YAML file has valid schema should fail if title does not match first author 1'] = `
[{"wrongProperty":{"allowedValue":"^chore: regenerate README$"},"message":"must be equal to constant"}]
`

exports['check for config whether YAML file has valid schema should fail if title does not match second author 1'] = `
[{"wrongProperty":{"allowedValue":"^chore: release"},"message":"must be equal to constant"}]
`

exports['check for config whether YAML file has valid schema should fail if title does not match third author 1'] = `
[{"wrongProperty":{"allowedValue":"^chore: autogenerated discovery document update"},"message":"must be equal to constant"}]
`

exports['check for config whether YAML file has valid schema should fail if author is not allowed 1'] = `
[{"wrongProperty":{"allowedValues":["googleapis-publisher","yoshi-automation","release-please[bot]","yoshi-code-bot","gcf-owl-bot[bot]","renovate-bot"]},"message":"must be equal to one of the allowed values"}]
`

exports['check for config whether YAML file has valid schema should fail if it does not have title property 1'] = `
[{"wrongProperty":{"missingProperty":"title"},"message":"must have required property 'title'"}]
`

exports['check for config whether YAML file has valid schema should fail if config is empty 1'] = `
[{"wrongProperty":{"type":"object"},"message":"must be object"}]
`

exports['check for config whether YAML file has valid schema should fail if there are duplicate items 1'] = `
[{"wrongProperty":{"i":1,"j":0},"message":"must NOT have duplicate items (items ## 0 and 1 are identical)"}]
`

exports['check for config whether YAML file has valid schema V2 should fail if YAML has any other properties than the ones specified 1'] = `
[{"wrongProperty":{"allowedValues":["UpdateDiscoveryArtifacts","RegenerateReadme","DiscoveryDocUpdate","PythonDependency","PythonSampleDependency","NodeDependency","NodeRelease","JavaApiaryCodegen","JavaDependency","OwlBotTemplateChanges","OwlBotAPIChanges","PHPApiaryCodegen","PythonSampleAppDependency","JavaSampleAppDependency","DockerDependency","GoDependency","GoApiaryCodegen"]},"message":"must be equal to one of the allowed values"}]
`

exports['check for config whether YAML file has valid schema V2 should fail if the property is wrong 1'] = `
[{"wrongProperty":{"additionalProperty":"processeses"},"message":"must NOT have additional properties"}]
`

exports['check for config whether YAML file has valid schema V2 should fail if both v1 and v2 schemas are included 1'] = `
[{"wrongProperty":{"additionalProperty":"rules"},"message":"must NOT have additional properties"}]
`

exports['check for config whether YAML file has valid schema V2 should fail if there are duplicate items 1'] = `
[{"wrongProperty":{"i":0,"j":1},"message":"must NOT have duplicate items (items ## 1 and 0 are identical)"}]
`
